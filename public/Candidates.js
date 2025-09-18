// src/mocks/handlers.js
import { http } from 'msw';

export const handlers = [
    http.get('/api/candidates', ({ request }) => {
        // Extract query parameters safely
        const url = new URL(request.url);
        const search = url.searchParams.get('search') ?? ''; // Use nullish coalescing for safety
        const stage = url.searchParams.get('stage') ?? '';
        const page = url.searchParams.get('page') ?? '1';

        // Mock candidate data
        const candidates = [
            { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'applied', location: 'San Francisco, CA', experience: 8, salary: '$140k-$160k', skills: ['React', 'Node.js', 'TypeScript', 'AWS'], lastActive: '2 days ago', company: 'Google' },
            { id: 2, name: 'Marcus Johnson', email: 'marcus.johnson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'screen', location: 'New York, NY', experience: 5, salary: '$120k-$140k', skills: ['Figma', 'Design Systems'], lastActive: '1 week ago', company: 'Instagram' },
            { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'tech', location: 'Remote', experience: 6, salary: '$130k-$150k', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], lastActive: '3 days ago', company: 'Netflix' },
            { id: 4, name: 'Alex Rodriguez', email: 'alex.rodriguez@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'offer', location: 'Austin, TX', experience: 7, salary: '$135k-$155k', skills: ['DevOps', 'Kubernetes', 'CI/CD'], lastActive: '1 month ago', company: 'Tesla' },
            { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'hired', location: 'London, UK', experience: 9, salary: '$150k-$170k', skills: ['Product Strategy', 'Analytics', 'A/B Testing'], lastActive: '5 days ago', company: 'Amazon' },
            { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'applied', location: 'San Francisco, CA', experience: 8, salary: '$140k-$160k', skills: ['React', 'Node.js', 'TypeScript', 'AWS'], lastActive: '2 days ago', company: 'Google' },
            { id: 2, name: 'Marcus Johnson', email: 'marcus.johnson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'screen', location: 'New York, NY', experience: 5, salary: '$120k-$140k', skills: ['Figma', 'Design Systems'], lastActive: '1 week ago', company: 'Instagram' },
            { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'tech', location: 'Remote', experience: 6, salary: '$130k-$150k', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], lastActive: '3 days ago', company: 'Netflix' },
            { id: 4, name: 'Alex Rodriguez', email: 'alex.rodriguez@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'offer', location: 'Austin, TX', experience: 7, salary: '$135k-$155k', skills: ['DevOps', 'Kubernetes', 'CI/CD'], lastActive: '1 month ago', company: 'Tesla' },
            { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'hired', location: 'London, UK', experience: 9, salary: '$150k-$170k', skills: ['Product Strategy', 'Analytics', 'A/B Testing'], lastActive: '5 days ago', company: 'Amazon' },
            { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'applied', location: 'San Francisco, CA', experience: 8, salary: '$140k-$160k', skills: ['React', 'Node.js', 'TypeScript', 'AWS'], lastActive: '2 days ago', company: 'Google' },
            { id: 2, name: 'Marcus Johnson', email: 'marcus.johnson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'screen', location: 'New York, NY', experience: 5, salary: '$120k-$140k', skills: ['Figma', 'Design Systems'], lastActive: '1 week ago', company: 'Instagram' },
            { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'tech', location: 'Remote', experience: 6, salary: '$130k-$150k', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], lastActive: '3 days ago', company: 'Netflix' },
            { id: 4, name: 'Alex Rodriguez', email: 'alex.rodriguez@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'offer', location: 'Austin, TX', experience: 7, salary: '$135k-$155k', skills: ['DevOps', 'Kubernetes', 'CI/CD'], lastActive: '1 month ago', company: 'Tesla' },
            { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'hired', location: 'London, UK', experience: 9, salary: '$150k-$170k', skills: ['Product Strategy', 'Analytics', 'A/B Testing'], lastActive: '5 days ago', company: 'Amazon' },
            { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'applied', location: 'San Francisco, CA', experience: 8, salary: '$140k-$160k', skills: ['React', 'Node.js', 'TypeScript', 'AWS'], lastActive: '2 days ago', company: 'Google' },
            { id: 2, name: 'Marcus Johnson', email: 'marcus.johnson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'screen', location: 'New York, NY', experience: 5, salary: '$120k-$140k', skills: ['Figma', 'Design Systems'], lastActive: '1 week ago', company: 'Instagram' },
            { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'tech', location: 'Remote', experience: 6, salary: '$130k-$150k', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], lastActive: '3 days ago', company: 'Netflix' },
            { id: 4, name: 'Alex Rodriguez', email: 'alex.rodriguez@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'offer', location: 'Austin, TX', experience: 7, salary: '$135k-$155k', skills: ['DevOps', 'Kubernetes', 'CI/CD'], lastActive: '1 month ago', company: 'Tesla' },
            { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'hired', location: 'London, UK', experience: 9, salary: '$150k-$170k', skills: ['Product Strategy', 'Analytics', 'A/B Testing'], lastActive: '5 days ago', company: 'Amazon' },
            { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'applied', location: 'San Francisco, CA', experience: 8, salary: '$140k-$160k', skills: ['React', 'Node.js', 'TypeScript', 'AWS'], lastActive: '2 days ago', company: 'Google' },
            { id: 2, name: 'Marcus Johnson', email: 'marcus.johnson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'screen', location: 'New York, NY', experience: 5, salary: '$120k-$140k', skills: ['Figma', 'Design Systems'], lastActive: '1 week ago', company: 'Instagram' },
            { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'tech', location: 'Remote', experience: 6, salary: '$130k-$150k', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], lastActive: '3 days ago', company: 'Netflix' },
            { id: 4, name: 'Alex Rodriguez', email: 'alex.rodriguez@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'offer', location: 'Austin, TX', experience: 7, salary: '$135k-$155k', skills: ['DevOps', 'Kubernetes', 'CI/CD'], lastActive: '1 month ago', company: 'Tesla' },
            { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'hired', location: 'London, UK', experience: 9, salary: '$150k-$170k', skills: ['Product Strategy', 'Analytics', 'A/B Testing'], lastActive: '5 days ago', company: 'Amazon' },
            { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'applied', location: 'San Francisco, CA', experience: 8, salary: '$140k-$160k', skills: ['React', 'Node.js', 'TypeScript', 'AWS'], lastActive: '2 days ago', company: 'Google' },
            { id: 2, name: 'Marcus Johnson', email: 'marcus.johnson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'screen', location: 'New York, NY', experience: 5, salary: '$120k-$140k', skills: ['Figma', 'Design Systems'], lastActive: '1 week ago', company: 'Instagram' },
            { id: 3, name: 'Priya Patel', email: 'priya.patel@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'tech', location: 'Remote', experience: 6, salary: '$130k-$150k', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], lastActive: '3 days ago', company: 'Netflix' },
            { id: 4, name: 'Alex Rodriguez', email: 'alex.rodriguez@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'offer', location: 'Austin, TX', experience: 7, salary: '$135k-$155k', skills: ['DevOps', 'Kubernetes', 'CI/CD'], lastActive: '1 month ago', company: 'Tesla' },
            { id: 5, name: 'Emma Thompson', email: 'emma.thompson@example.com', describe: "Experienced full-stack engineer with expertise in building scalable web applications. Previously at Google , looking for  IC roles at growth-stage companies.", stage: 'hired', location: 'London, UK', experience: 9, salary: '$150k-$170k', skills: ['Product Strategy', 'Analytics', 'A/B Testing'], lastActive: '5 days ago', company: 'Amazon' },
        ];

        // Filter candidates based on query parameters
        const filteredCandidates = candidates.filter((candidate) => {
            // Ensure search is a string before calling toLowerCase
            const matchesSearch = search && typeof search === 'string'
                ? candidate.name.toLowerCase().includes(search.toLowerCase())
                : true;
            const matchesStage = stage && typeof stage === 'string'
                ? candidate.stage === stage
                : true;
            return matchesSearch && matchesStage;
        });

        // Simulate pagination
        const pageNumber = parseInt(page, 10) || 1;
        const pageSize = 10;
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
    })
];