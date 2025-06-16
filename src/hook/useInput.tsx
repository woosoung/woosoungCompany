import React, { useCallback, useState } from "react";

export default function useInput(initialValue: string = "") {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }, []);

    return [value, handler, setValue] as const;
}
