import { useState, useEffect } from "react";

type UseSearchFilterResult<T> = {
    search: string;
    setSearch: (value: string) => void;
    filteredData: T[];
};

/**
 * Reusable hook for filtering an array of objects with debounce
 * @param data - array of objects to filter
 * @param fields - array of keys of the object to search
 * @param delay - debounce delay in milliseconds
 */
export function useSearchFilter<T extends Record<string, any>>(
    data: T[],
    fields: (keyof T)[] = [],
    delay: number = 300
): UseSearchFilterResult<T> {
    const [search, setSearch] = useState<string>("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");

    // Debounce effect
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, delay);

        return () => clearTimeout(handler);
    }, [search, delay]);

    // Filter data based on debounced search
    const filteredData = data.filter((item) =>
        fields.some((field) =>
            String(item[field]).toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    );

    return { search, setSearch, filteredData };
}