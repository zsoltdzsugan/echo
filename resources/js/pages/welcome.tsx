import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                            <div className="size-full flex flex-col justify-between gap-4">
                                <img src={'assets/logo_noheight.png'} className="max-w-md w-full mx-auto h-auto"/>
                                <div className="flex max-h-2/3 h-full justify-center items-center gap-4 max-w-md w-full mx-auto">
                                    <Button asChild>
                                        <Link
                                            href={route('login')}
                                            className="w-full"
                                        >
                                            Log in
                                        </Link>
                                    </Button>
                                    <Button asChild>
                                        <Link
                                            href={route('register')}
                                            className="w-full"
                                        >
                                            Register
                                        </Link>
                                    </Button>
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
            </div>
        </>
    );
}
