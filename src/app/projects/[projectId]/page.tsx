
import ProjectDetails from "@/features/projects/presentation/components/ProjectDetails";
import { Constants } from "@/general/constants/Constants";
import { Metadata } from "next";

export async function generateMetadata({
    params
}: {
    params: Promise<{ projectId: string }>
}): Promise<Metadata> {
    const { projectId } = await params;

    const PAGE_NAME = 'Project'
    const PAGE_URL = `/projects/${projectId}`

    return {
        title: `${PAGE_NAME} - ${Constants.APP_NAME} `,
        metadataBase: new URL(`${Constants.D0MAIN_NAME}`),
        alternates: {
            canonical: PAGE_URL,
        },
        description: Constants.META_DESCRIPTION,
        openGraph: {
            siteName: Constants.APP_NAME,
            url: Constants.D0MAIN_NAME + PAGE_URL,
            title: `${PAGE_NAME} - ${Constants.APP_NAME} `,
            type: 'website',
            description: Constants.META_DESCRIPTION,
            images: [
                {
                    url: `${Constants.D0MAIN_NAME}${Constants.APP_LOGO}`,
                    width: 1920,
                    height: 1080,
                    alt: Constants.APP_NAME
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            images: [
                {
                    url: `${Constants.D0MAIN_NAME}${Constants.APP_LOGO}`,
                    width: 1920,
                    height: 1080,
                    alt: Constants.APP_NAME
                }
            ],
            description: Constants.META_DESCRIPTION,
            title: `${PAGE_NAME} - ${Constants.APP_NAME} `
        },
        robots: 'index, follow',
    };
}

export default async function ProjectsPage({ params }: { params: Promise<{ projectId: string }> }) {

    const { projectId } = await params

    return (
        <>
            <ProjectDetails projectId={projectId} />
        </>
    );
}
