import { Grid, GridItem, GridItemProps } from "@chakra-ui/react";
import { slugify } from '@/utils/slugify';
import { CenteredLabel } from '@/components/CenteredLabel';
import Image from "next/image";
import { Categories } from "@/models/Categories";

//array que puede ser cualquiera de esos valores


type Props = {
    categories: Categories[]
}

export function HomeHeroCategories({ categories }: Props) {
    return (<Grid templateColumns="540px 255px 255px" gap="30px" templateRows="200px 260px">
        {categories.map((cat, key) => {
            const slug = slugify(cat);
            const imageUrl = `/pic-${slug}.jpg`;

            let gridItemProps: GridItemProps = {
                position: "relative",
                w: "100%",
                h: "100%"
            };

            if (key == 0) {
                gridItemProps.rowSpan = 2;
            }

            if (key == categories.length - 1) {
                gridItemProps.colSpan = 2;
            }

            return <GridItem {...gridItemProps} key={key}><Image src={imageUrl} fill={true} alt={cat} />
                <CenteredLabel>{cat}</CenteredLabel></GridItem>;
        })}
    </Grid>);
}