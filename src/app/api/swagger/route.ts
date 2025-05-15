// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import swaggerDocument from "./swagger.json";

export async function GET() {
    return new Response(JSON.stringify(swaggerDocument), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
