export class Company {
    id!: string;
    userId!: string;
    company!: {
        name: string;
        description: string;
        governmentId: string;
    };
}