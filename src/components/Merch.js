import React, { useContext, useEffect } from 'react'
import { ShopContext } from './context/shopContext'
import { Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'
import { Card, Nav, Tab } from 'react-bootstrap'

const Merch = () => {

    const { fetchAllProducts, products, collections, fetchAllCollections } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        fetchAllCollections()
        return () => {
        }
    }, [fetchAllProducts, fetchAllCollections])

    const allProducts = products.map(product => (
        <Col size='4' key={product.id} style={{marginBottom: '1rem'}}>
            <Card border='light' bg='white' style={{height: 'auto', width: '20rem'}}>
            <Link to={`/product/${product.id}`}>
                <Div p="2rem" w='20rem' h='23rem'>
                    <Div
                        h="15rem"
                        w="15rem"
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPos="center center"
                    />
                    <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                        <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                        <span style={{color: 'black'}}>${product.variants[0].price}</span>
                    </Card.Body>
                </Div>
            </Link>
            </Card>
        </Col>
    ))

    if(!collections) return <Div>Loading...</Div>
    const headware = collections.find(o => o.title === 'Headware')
    const homeLiving = collections.find(o => o.title === 'Home & Living')
    const jacketsHoodies = collections.find(o => o.title === 'Jackets & Hoodies')
    const shirts = collections.find(o => o.title === 'Shirts')
    const women = collections.find(o => o.title === `Women's`)
    let headwareTab;
    let homeLivingTab;
    let jacketsHoodiesTab;
    let shirtsTab
    let womenTab

    if(headware)
    headwareTab = headware.products.map(product => (
        <Col size='4' key={product.id} style={{marginBottom: '1rem'}}>
            <Card border='light' bg='white' style={{height: 'auto', width: '20rem'}}>
            <Link to={`/product/${product.id}`}>
                <Div p="2rem" w='20rem' h='23rem'>
                    <Div
                        h="15rem"
                        w="15rem"
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPos="center center"
                    />
                    <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                        <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                        <span style={{color: 'black'}}>${product.variants[0].price}</span>
                    </Card.Body>
                </Div>
            </Link>
            </Card>
        </Col>
    ))

    if(homeLiving)
    {homeLivingTab = homeLiving.products.map(product => (
        <Col size='4' key={product.id} style={{marginBottom: '1rem'}}>
            <Card border='light' bg='white' style={{height: 'auto', width: '20rem'}}>
            <Link to={`/product/${product.id}`}>
                <Div p="2rem" w='20rem' h='23rem'>
                    <Div
                        h="15rem"
                        w="15rem"
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPos="center center"
                    />
                    <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                        <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                        <span style={{color: 'black'}}>${product.variants[0].price}</span>
                    </Card.Body>
                </Div>
            </Link>
            </Card>
        </Col>
    ))}

    if(jacketsHoodies)
    jacketsHoodiesTab = jacketsHoodies.products.map(product => (
        <Col size='4' key={product.id} style={{marginBottom: '1rem'}}>
            <Card border='light' bg='white' style={{height: 'auto', width: '20rem'}}>
            <Link to={`/product/${product.id}`}>
                <Div p="2rem" w='20rem' h='23rem'>
                    <Div
                        h="15rem"
                        w="15rem"
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPos="center center"
                    />
                    <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                        <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                        <span style={{color: 'black'}}>${product.variants[0].price}</span>
                    </Card.Body>
                </Div>
            </Link>
            </Card>
        </Col>
    ))

    if(shirts){
        shirtsTab = shirts.products.map(product => (
            <Col size='4' key={product.id} style={{marginBottom: '1rem'}}>
                <Card border='light' bg='white' style={{height: 'auto', width: '20rem'}}>
                <Link to={`/product/${product.id}`}>
                    <Div p="2rem" w='20rem' h='23rem'>
                        <Div
                            h="15rem"
                            w="15rem"
                            bgImg={product.images[0].src}
                            bgSize="cover"
                            bgPos="center center"
                        />
                        <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                            <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                            <span style={{color: 'black'}}>${product.variants[0].price}</span>
                        </Card.Body>
                    </Div>
                </Link>
                </Card>
            </Col>
        ))
    }

    if(women){
        womenTab = women.products.map(product => (
            <Col size='4' key={product.id} style={{marginBottom: '1rem'}}>
                <Card border='light' bg='white' style={{height: 'auto', width: '20rem'}}>
                <Link to={`/product/${product.id}`}>
                    <Div p="2rem" w='20rem' h='23rem'>
                        <Div
                            h="15rem"
                            w="15rem"
                            bgImg={product.images[0].src}
                            bgSize="cover"
                            bgPos="center center"
                        />
                        <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                            <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                            <span style={{color: 'black'}}>${product.variants[0].price}</span>
                        </Card.Body>
                    </Div>
                </Link>
                </Card>
            </Col>
        ))
    }

    return(
        <Row style={{paddingTop: '2rem'}}>
            <Tab.Container id='left-tabs-example' defaultActiveKey='all'>
            <Col size={{sm: '12', md:'2', lg: '2'}}>
                <Row>
                    <Col h="100vw">
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey='all'>All Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='headware'>Headware</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='homeliving'>Home Living</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='jacketshoodies'>Jackets and Hoodies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='shirts'>Shirts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='women'>Women's</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>               
            </Col>
            <Col size={{sm: 12, md: 10, lg: 9}}>
                <Tab.Content>
                    <Tab.Pane eventKey='all'>
                        <Row 
                            d='flex' 
                            flexWrap='wrap' 
                            flexDir={{ xs: 'column', lg: 'row'}} 
                            maxH={{ xs: 'auto', md: '100vp'}}
                        >
                            {allProducts}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='headware'>
                        <Row 
                                d='flex' 
                                flexWrap='wrap' 
                                flexDir={{ xs: 'column', lg: 'row'}} 
                                maxH={{ xs: 'auto', md: '100vp'}}
                            >
                                {headwareTab}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='homeliving'>
                        <Row 
                                d='flex' 
                                flexWrap='wrap' 
                                flexDir={{ xs: 'column', lg: 'row'}} 
                                maxH={{ xs: 'auto', md: '100vp'}}
                            >
                                {homeLivingTab}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='jacketshoodies'>
                        <Row 
                                d='flex' 
                                flexWrap='wrap' 
                                flexDir={{ xs: 'column', lg: 'row'}} 
                                maxH={{ xs: 'auto', md: '100vp'}}
                            >
                                {jacketsHoodiesTab}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='shirts'>
                        <Row 
                                d='flex' 
                                flexWrap='wrap' 
                                flexDir={{ xs: 'column', lg: 'row'}} 
                                maxH={{ xs: 'auto', md: '100vp'}}
                            >
                                {shirtsTab}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='women'>
                        <Row 
                                d='flex' 
                                flexWrap='wrap' 
                                flexDir={{ xs: 'column', lg: 'row'}} 
                                maxH={{ xs: 'auto', md: '100vp'}}
                            >
                                {womenTab}
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
            </Tab.Container>
        </Row>
    )
}

export default Merch;