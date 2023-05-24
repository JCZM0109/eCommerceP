import { Flex, Grid, GridItem, GridItemProps} from "@chakra-ui/react";
import { slugify } from '@/utils/slugify';
import { CenteredLabel } from '@/components/CenteredLabel';
import Image from "next/image";
import { Categories } from "@/models/Categories";

//array que puede ser cualquiera de esos valores

type Props = {
    categories: Categories[]
}

export function HomeHeroCategories({ categories }: Props) {
    return (<Grid templateColumns={{
        base: '1fr 1fr',
        sm: '2fr 1fr 1fr'
    }} templateRows={{
        base: '130px 154px 130px',
        sm: '200px 260px'
    }} gap={{ base: ".5rem", md: "1rem", lg: "2rem" }} templateAreas={{
        base: `
            "cat1 cat1"
            "cat2 cat3"
            "cat4 cat4"
        `,
        md: `
            "cat1 cat2 cat3"
            "cat1 cat4 cat4"
        `
    }}>
        {categories.map((cat, index) => {
            const slug = slugify(cat);
            const imageUrl = `/pic-${slug}.jpg`;

            let gridItemProps: GridItemProps = {
                position: "relative",
                w: "100%",
                h: "100%",
                //Asi se le asigna a cada iteración del map un cat, para hacerlo responsive según el tamaño de la pantalla--
                gridArea: `cat${index + 1}`
            };

            //asi se haría sin que sea responsive, hay que pensar en el responsive y en la lógica según el tamaño de la pantalla.
            // if (index == 0) {
            //     gridItemProps.gridArea = "cat1";
            // }

            // if (index == categories.length - 1) {
            //     gridItemProps.gridArea = "cat4";
            // }

            return <GridItem {...gridItemProps} key={index}><Image src={imageUrl} fill={true} alt={cat} />
                    <Flex display="flex" alignItems="center"  justifyContent="center" height="100%">
                        <CenteredLabel>{cat}</CenteredLabel>
                    </Flex>
                    </GridItem>;
        })}
    </Grid>);
}