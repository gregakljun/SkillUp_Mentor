import React, { useState } from "react";

type User = {
    name: string;
    email: string;
}

export default function Button() {
    const [user, setUser] = useState<User | null>(null);

    return <button>Click me!</button>
}