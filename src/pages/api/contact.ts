import type { APIRoute } from 'astro';

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

export const runtime = 'edge';
export const prerender = false;
export const dynamic = 'force-dynamic';

type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

interface JSONObject {
    [k: string]: JSONValue;
}

const buildResponse = (status = 200, data: JSONObject) => {
    return new Response(JSON.stringify(data), {
        status: status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const requiredFields = ['name', 'email', 'message'];

    // Make sure the api key was set
    if (!RESEND_API_KEY) {
        return buildResponse(500, {
            message: {
                code: 'missing_api_key'
            }
        });
    }

    // Make sure all required fields were sent
    const missingFields = requiredFields.filter((field) => {
        const value = data.get(field);

        if (typeof value === 'string') {
            return value.trim().length === 0;
        }

        return value !== null;
    });

    if (missingFields.length > 0) {
        return buildResponse(400, {
            error: {
                code: 'missing_fields',
                fields: missingFields
            }
        });
    }

    // Build up the required fields
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Send email
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
            from: 'Nathaniel Blackburn <noreply@nblackburn.uk>',
            to: ['Nathaniel Blackburn <support@nblackburn.uk>'],
            tags: [
                {
                    name: 'type',
                    value: 'contact'
                },
                {
                    name: 'project',
                    value: 'website'
                }
            ],
            reply_to: [`${name} <${email}>`],
            subject: `${name} has reached out to you via nblackburn.uk`,
            text: message
        })
    });

    // Verify if email was send
    if (!res.ok) {
        return buildResponse(500, {
            message: {
                code: 'unknown_error'
            }
        });
    }

    // Return response
    return buildResponse(200, {
        data: {
            code: 'message_sent'
        }
    });
};
