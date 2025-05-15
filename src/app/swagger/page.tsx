// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.


"use client";

import { useEffect } from "react";
import SwaggerUI from "swagger-ui-dist/swagger-ui-es-bundle";
import "swagger-ui-dist/swagger-ui.css";

export default function SwaggerPage() {
    useEffect(() => {
        SwaggerUI({
            dom_id: "#swagger-ui",
            url: "/api/swagger",
        });
    }, []);

    return (
        <div>
            <div id="swagger-ui" />
        </div>
    );
}
