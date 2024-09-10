import { useRouter } from 'next/router';
import Link from 'next/link';

interface BreadcrumbProps {
    title?: string;
}

export function Breadcrumb({ title }: BreadcrumbProps) {
    const router = useRouter();

    const pathSegments = router.asPath.split('/').filter(segment => segment.trim() !== '');

    return (
        <div className="container pl-8 md:pl-11 mx-auto pt-5 pb-10">
            <nav aria-label="Breadcrumb">
                <ol className="flex flex-row text-[11px] md:text-sm">
                    <li>
                        <Link href="/">Home <span className="px-2">/</span></Link>
                    </li>
                    <li>
                        <Link href="/products">Car Collection <span className="px-2">/</span></Link>
                    </li>
                    {title ? (
                        <li>
                            <span className="text-secondary-50">{title}</span>
                        </li>
                    ) : (
                        pathSegments.map((segment, index) => {
                            const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathSegments.length - 1;
                            return (
                                <li key={segment}>
                                    {isLast ? (
                                        <span className="text-secondary-50">{segment}</span>
                                    ) : (
                                        <Link href={routeTo}>
                                            {segment} <span className="px-2">/</span>
                                        </Link>
                                    )}
                                </li>
                            );
                        })
                    )}
                </ol>
            </nav>
        </div>
    );
}





