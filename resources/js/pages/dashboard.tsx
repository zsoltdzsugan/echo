import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

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
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                        <div className="size-full flex flex-col justify-between gap-4">
                            <img src="/assets/logo_noheight.png" className="max-w-xs w-full mx-auto h-auto"/>
                            <div className="flex flex-col h-full justify-center gap-4 max-w-md w-full mx-auto">
                                <div>
                                <Button asChild size={'sm'}>
                                    <Link
                                        href={route('lobbies.store')}
                                        method="post"
                                        className="w-full"
                                    >
                                        Create Game
                                    </Link>
                                </Button>
                                </div>
                                <div>
                                    <Input placeholder="Lobby ID" />
                                    <Button asChild size={'sm'}>
                                        <Link
                                            href={route('lobbies.store')}
                                            className="w-full mt-4"
                                        >
                                            Join Game
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
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
