// src/mocks/handlers.js
import { http } from 'msw';

export const handlers = [
    http.get('/candidates', ({ request }) => {
        const candidates = [
            { id: 1, name: 'Alice Johnson', stage: 'Interview', email: 'alice@example.com' },
            { id: 2, name: 'Bob Smith', stage: 'Screening', email: 'bob@example.com' },
            { id: 3, name: 'Charlie Brown', stage: 'Offer', email: 'charlie@example.com' },
        ];

        // Optionally filter candidates based on query parameters
        const filteredCandidates = candidates.filter((candidate) => {
            const matchesSearch = search
                ? candidate.name.toLowerCase().includes(search.toLowerCase())
                : true;
            const matchesStage = stage ? candidate.stage === stage : true;
            return matchesSearch && matchesStage;
        });

        // Simulate pagination (e.g., 2 candidates per page)
        const pageNumber = parseInt(page, 10) || 1;
        const pageSize = 2;
        const paginatedCandidates = filteredCandidates.slice(
            (pageNumber - 1) * pageSize,
            pageNumber * pageSize
        );

        return new Response(
            JSON.stringify({
                candidates: paginatedCandidates,
                total: filteredCandidates.length,
                page: pageNumber,
                pageSize,
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }),
];