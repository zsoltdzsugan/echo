import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Gamepad2, LogIn } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-square overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative flex flex-col gap-4 h-full w-full max-w-xs mx-auto aspect-square overflow-hidden rounded-xl">
                            <img src="/assets/logo_outline.png" className="h-auto max-w-[320px] mx-auto sm:w-32 md:w-44 lg:w-full"/>
                            <Button asChild size={'lg'} variant={'default'} className='cursor-pointer'>
                                <Link href={route('games.store')} method="post" as="button">
                                    <Gamepad2 />
                                    Create Game
                                </Link>
                            </Button>

                            <div className="mt-4">
                                <Label>Room Name</Label>
                                <Input />
                            </div>
                            <Button asChild size={'lg'} variant={'secondary'} className='cursor-pointer'>
                                <Link href={route('games.store')} method="post" as="button">
                                    <LogIn />
                                    Join Game
                                </Link>
                            </Button>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-square overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
