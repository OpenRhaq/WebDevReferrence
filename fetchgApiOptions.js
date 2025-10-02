// Complete Fetch API Configuration Reference
const fetchRequestReference = {
    // URL examples
    url: [
        "http://127.0.0.1:8080/api/",
        "https://api.example.com/data",
        "https://yourdomain.com/endpoint",
        "https://jsonplaceholder.typicode.com/posts",
        "https://api.github.com/users",
        "/api/local-endpoint",
        "./data.json"
    ],

    // HTTP Methods
    method: [
        "GET",      // Retrieve data
        "POST",     // Create new resource
        "PUT",      // Replace resource
        "DELETE",   // Remove resource
        "PATCH",    // Partial update
        "HEAD",     // Headers only
        "OPTIONS"   // CORS preflight
    ],

    // Request Headers
    headers: {
        // Content Types
        "Content-Type": [
            "application/json",                    // JSON data
            "application/xml",                     // XML data
            "text/plain",                          // Plain text
            "text/html",                           // HTML content
            "text/css",                            // CSS styles
            "text/csv",                            // CSV data
            "application/javascript",              // JavaScript
            "application/pdf",                     // PDF documents
            "application/zip",                     // ZIP archives
            "application/x-www-form-urlencoded",   // Form data encoded
            "multipart/form-data",                 // File uploads
            "application/octet-stream",            // Binary data
            "image/png",                           // PNG images
            "image/jpeg",                          // JPEG images
            "image/gif",                           // GIF images
            "image/webp",                          // WebP images
            "image/svg+xml",                       // SVG vector images
            "audio/mpeg",                          // MP3 audio
            "audio/wav",                           // WAV audio
            "audio/ogg",                           // OGG audio
            "video/mp4",                           // MP4 video
            "video/webm",                          // WebM video
            "application/xhtml+xml",               // XHTML
            "application/ld+json"                  // JSON-LD
        ],

        // Authorization
        "Authorization": [
            "Bearer <token>",                      // JWT tokens
            "Basic <base64_credentials>",          // Basic auth
            "Token <token>",                       // Token auth
            "Digest <digest>",                     // Digest auth
            "AWS4-HMAC-SHA256 <credentials>"       // AWS signature
        ],

        // Accept Headers
        "Accept": [
            "application/json",
            "application/xml",
            "text/plain",
            "text/html",
            "text/css",
            "text/csv",
            "application/javascript",
            "application/pdf",
            "application/zip",
            "multipart/form-data",
            "application/octet-stream",
            "image/png",
            "image/jpeg",
            "image/gif",
            "image/webp",
            "image/svg+xml",
            "audio/mpeg",
            "audio/wav",
            "audio/ogg",
            "video/mp4",
            "video/webm",
            "*/*"                                  // Accept anything
        ],

        // Security Headers
        "X-CSRFToken": [
            "<csrf_token>"
        ],
        "X-API-Key": [
            "<api_key>"
        ],
        "X-Requested-With": [
            "XMLHttpRequest"
        ],

        // Caching Headers
        "Cache-Control": [
            "no-cache",
            "no-store",
            "max-age=<seconds>",
            "public",
            "private",
            "must-revalidate",
            "proxy-revalidate",
            "no-transform",
            "immutable"
        ],
        "If-Modified-Since": [
            "<http_date_timestamp>"
        ],
        "If-None-Match": [
            "<etag_value>"
        ],
        "ETag": [
            "<etag_value>"
        ],

        // Conditional Headers
        "If-Match": [
            "<etag_value>"
        ],
        "If-Unmodified-Since": [
            "<http_date_timestamp>"
        ],

        // CORS Headers
        "Origin": [
            "https://yourdomain.com"
        ],
        "Access-Control-Request-Method": [
            "GET", "POST", "PUT", "DELETE", "PATCH"
        ],
        "Access-Control-Request-Headers": [
            "Content-Type", "Authorization", "X-API-Key"
        ],

        // Custom Headers
        "X-Custom-Header": [
            "<custom_value>"
        ],
        "X-Forwarded-For": [
            "<client_ip>"
        ],
        "X-Forwarded-Proto": [
            "https", "http"
        ],

        // Rate Limiting
        "X-RateLimit-Limit": [
            "1000"
        ],
        "X-RateLimit-Remaining": [
            "999"
        ],
        "X-RateLimit-Reset": [
            "<timestamp>"
        ],

        // Content Negotiation
        "Accept-Language": [
            "en-US",
            "en-GB",
            "es-ES",
            "fr-FR",
            "de-DE",
            "zh-CN",
            "ja-JP",
            "ko-KR"
        ],
        "Accept-Encoding": [
            "gzip",
            "deflate",
            "br",
            "identity",
            "*"
        ],
        "Accept-Charset": [
            "utf-8",
            "iso-8859-1",
            "windows-1252"
        ],

        // Cookies
        "Cookie": [
            "session_id=<session_id>; user_pref=<preferences>"
        ],

        // User Agent
        "User-Agent": [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
            "Custom-API-Client/1.0.0"
        ],

        // Other Standard Headers
        "Host": [
            "api.example.com"
        ],
        "Referer": [
            "https://previous-page.com"
        ],
        "DNT": [
            "1", "0"
        ],
        "Upgrade-Insecure-Requests": [
            "1"
        ],
        "TE": [
            "trailers", "deflate", "gzip"
        ]
    },

    // Request Body Types
    body: [
        // JSON data
        "JSON.stringify({ key: 'value', data: { nested: 'object' } })",

        // FormData for file uploads
        "new FormData()",
        "const formData = new FormData(); formData.append('file', fileInput); formData.append('name', 'value')",

        // URL encoded form data
        "new URLSearchParams()",
        "new URLSearchParams({ key: 'value', array: ['item1', 'item2'] })",

        // Binary data
        "new Blob()",
        "new Blob([JSON.stringify({ data: 'value' })], { type: 'application/json' })",
        "new ArrayBuffer()",

        // Text data
        "'plain text string'",

        // Streaming
        "ReadableStream",

        // File objects
        "fileInput.files[0]",

        // ArrayBufferView
        "new Uint8Array()",
        "new Int16Array()",
        "new Float32Array()"
    ],

    // Fetch Options
    signal: [
        "new AbortController().signal",
        "const controller = new AbortController(); setTimeout(() => controller.abort(), 5000); controller.signal"
    ],

    mode: [
        "cors",        // Cross-Origin Resource Sharing (default for cross-origin)
        "no-cors",     // Limited to simple requests
        "same-origin", // Only same-origin requests
        "navigate"     // For navigation requests
    ],

    credentials: [
        "omit",        // Don't send or receive cookies
        "same-origin", // Send cookies for same-origin requests only
        "include"      // Always send cookies, even for cross-origin
    ],

    cache: [
        "default",        // Browser default caching
        "no-store",       // Don't cache at all
        "reload",         // Force reload, don't use cache
        "no-cache",       // Validate with server before using cache
        "force-cache",    // Use cache even if stale
        "only-if-cached"  // Only use cache, no network request
    ],

    redirect: [
        "follow",    // Automatically follow redirects (default)
        "manual",    // Return the redirect response
        "error"      // Abort with error on redirect
    ],

    referrer: [
        "client",           // Default referrer
        "no-referrer",      // No referrer header
        "https://example.com/page"  // Specific referrer URL
    ],

    referrerPolicy: [
        "no-referrer",
        "no-referrer-when-downgrade",
        "origin",
        "origin-when-cross-origin",
        "same-origin",
        "strict-origin",
        "strict-origin-when-cross-origin",
        "unsafe-url"
    ],

    integrity: [
        "sha256-<base64-encoded-hash>",
        "sha384-<base64-encoded-hash>",
        "sha512-<base64-encoded-hash>",
        "sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8=" // Example
    ],

    keepalive: [
        true,    // Keep request alive after page unload
        false    // Normal request lifecycle
    ],

    window: [
        null  // Must be null, reserved for future use
    ],

    // Advanced Options
    priority: [
        "high",   // High priority request
        "low",    // Low priority request  
        "auto"    // Browser determines priority (default)
    ],

    duplex: [
        "half"   // For streaming requests (required for request body streaming)
    ],

    // Response Types
    responseType: [
        "json",         // Parse as JSON
        "text",         // Return as text
        "blob",         // Return as Blob
        "arraybuffer",  // Return as ArrayBuffer
        "formData",     // Parse as FormData
        "stream"        // Return as ReadableStream
    ],

    // Common Status Codes
    statusCodes: {
        informational: [100, 101, 102, 103],
        success: [200, 201, 202, 203, 204, 205, 206, 207, 208, 226],
        redirect: [300, 301, 302, 303, 304, 305, 306, 307, 308],
        clientError: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451],
        serverError: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511]
    },

    // Common Error Types
    errorTypes: [
        "TypeError",           // Invalid URL or configuration
        "SyntaxError",         // Invalid JSON response
        "AbortError",          // Request was aborted
        "NetworkError",        // Network failure
        "TimeoutError",        // Request timeout
        "SecurityError"        // CORS or security violation
    ],

    // Common API Patterns
    apiPatterns: {
        restful: {
            get: "GET /resources",
            getById: "GET /resources/:id",
            create: "POST /resources",
            update: "PUT /resources/:id",
            patch: "PATCH /resources/:id",
            delete: "DELETE /resources/:id"
        },
        graphql: {
            query: "POST /graphql with { query: '{ users { name } }' }",
            mutation: "POST /graphql with { query: 'mutation { createUser }' }"
        },
        rpc: {
            call: "POST /rpc with { method: 'methodName', params: {} }"
        },
        upload: {
            single: "POST /upload with FormData and file",
            multiple: "POST /upload with FormData and multiple files",
            chunked: "PUT /upload with Content-Range headers"
        },
        pagination: {
            offset: "GET /items?offset=0&limit=10",
            cursor: "GET /items?cursor=<cursor>&limit=10",
            page: "GET /items?page=1&per_page=10"
        }
    },

    // Security Considerations
    security: {
        csrf: [
            "Use CSRF tokens for state-changing requests",
            "Set SameSite cookies",
            "Validate Origin header"
        ],
        cors: [
            "Configure proper CORS headers on server",
            "Use credentials: 'include' for authenticated requests",
            "Handle preflight OPTIONS requests"
        ],
        auth: [
            "Use HTTPS for authentication",
            "Store tokens securely (HttpOnly cookies)",
            "Implement token refresh logic"
        ],
        sanitization: [
            "Validate and sanitize all inputs",
            "Use parameterized queries for databases",
            "Escape HTML in responses"
        ]
    },

    // Performance Optimizations
    performance: {
        compression: [
            "Enable gzip/brotli compression",
            "Use Accept-Encoding: gzip, deflate, br"
        ],
        caching: [
            "Set appropriate Cache-Control headers",
            "Use ETag for validation",
            "Implement CDN caching"
        ],
        connection: [
            "Use HTTP/2 or HTTP/3",
            "Enable keep-alive",
            "Use connection pooling"
        ],
        payload: [
            "Minify JSON responses",
            "Use pagination for large datasets",
            "Implement field selection (GraphQL-like)"
        ]
    },

    // Common Use Cases with Examples
    examples: {
        basicGet: `
            fetch('/api/users')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        `,
        postWithAuth: `
            fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ name: 'John Doe' })
            });
        `,
        fileUpload: `
            const formData = new FormData();
            formData.append('file', fileInput.files[0]);
            formData.append('description', 'File description');
            
            fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
        `,
        withTimeout: `
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            fetch('/api/slow', { signal: controller.signal })
                .then(response => response.json())
                .finally(() => clearTimeout(timeoutId));
        `,
        errorHandling: `
            async function apiCall() {
                try {
                    const response = await fetch('/api/data');
                    if (!response.ok) {
                        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
                    }
                    return await response.json();
                } catch (error) {
                    if (error.name === 'AbortError') {
                        console.log('Request was aborted');
                    } else {
                        console.error('Request failed:', error);
                    }
                }
            }
        `
    }
};

// Export for use in other modules (if using ES6 modules)
// export { fetchRequestReference };

// Or for CommonJS
// module.exports = { fetchRequestReference };

console.log('Fetch API Reference loaded successfully!');
console.log('Available properties:', Object.keys(fetchRequestReference));

// Utility function to generate fetch configuration
function createFetchConfig(method, url, options = {}) {
    return {
        method: method,
        url: url,
        ...options
    };
}

// Example usage:
const config = createFetchConfig('POST', '/api/users', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
    credentials: 'include'
});

console.log('Example configuration:', config);
