// src/app/dashboard/history/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

const historyItems = [
    { id: '1', jobTitle: 'Software Engineer', company: 'Tech Corp', date: '2023-10-27', type: 'CV' },
    { id: '2', jobTitle: 'Software Engineer', company: 'Tech Corp', date: '2023-10-27', type: 'Cover Letter' },
    { id: '3', jobTitle: 'Product Manager', company: 'Innovate LLC', date: '2023-10-25', type: 'CV' },
    { id: '4', jobTitle: 'Product Manager', company: 'Innovate LLC', date: '2023-10-25', type: 'Cover Letter' },
    { id: '5', jobTitle: 'UX Designer', company: 'Creative Co.', date: '2023-10-22', type: 'CV' },
];

export default function HistoryPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">History</h2>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Generated Documents</CardTitle>
                <CardDescription>A list of all your tailored CVs and cover letters.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Job Title</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {historyItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.jobTitle}</TableCell>
                                <TableCell>{item.company}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>
                                    <Badge variant={item.type === 'CV' ? 'default' : 'secondary'}>{item.type}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
