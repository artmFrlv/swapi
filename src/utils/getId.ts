
export default function getId(link: string): string {
    return link.split('/').reverse()[1];
};
