import { Box, Button, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css"

import {
   Center,

  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';


const AllProducts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
// remember to give it position:absolute
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> 
      
        <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <Button onClick={() => next()} />
        <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
      </div>
    );
  };
  const cards = [
    'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
    'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
    'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
    'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
  ];



  return (  
    <>
    <Grid templateColumns='repeat(5, 1fr)' gap={10}>
  <GridItem colSpan={2} h='10'>
    Catergrio
    </GridItem>
  <GridItem colStart={4} colEnd={6} h='10'>
    All Products
    </GridItem>
</Grid>
    <Box style={{
     
    width: "100%",
    
    padding: 5,
   }}
   p={6}
   >
<Carousel responsive={responsive}
     swipeable={true}
     draggable={false}
     showDots={false}
    
     ssr={true} // means to render carousel on server-side.
     infinite={true}
     autoPlay={true}
     autoPlaySpeed={2500}
     keyBoardControl={true}
     customTransition="all 200ms"
     transitionDuration={500}
     containerClass="carousel-container"
     removeArrowOnDeviceType={["mobile"]}
     dotListClass="custom-dot-list-style"
      customButtonGroup={<ButtonGroup />}
>
{cards.map((url,index)=>(
   <Center py={12} key={index}>
   <Box
     role={'group'}
     p={6}
     maxW={'330px'}
     w={'full'}
     
     boxShadow={'2xl'}
     rounded={'lg'}
     pos={'relative'}
     zIndex={1}>
     <Box
       rounded={'lg'}
       mt={-12}
       pos={'relative'}
       height={'230px'}
       _after={{
         transition: 'all .3s ease',
         content: '""',
         w: 'full',
         h: 'full',
         pos: 'absolute',
         top: 5,
         left: 0,
         backgroundImage: `url(${url})`,
         filter: 'blur(15px)',
         zIndex: -1,
         cursor:'pointer',
         
       }}
       _groupHover={{
         _after: {
           filter: 'blur(20px)',
       
         },
       }}>
       <Image
         rounded={'lg'}
         height={230}
         width={282}
         objectFit={'cover'}
         src={url}
         fallback={<Skeleton />}
         cursor="pointer"
       />
     </Box>
     <Stack pt={10} align={'center'}>
       <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
         Brand
       </Text>
       <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
         Nice Chair, pink
       </Heading>
       
      
     </Stack>
   </Box>
 </Center>
))}

</Carousel>
</Box>
</>
  );
}
 
export default AllProducts;