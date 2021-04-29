import React, {useContext, useEffect} from "react";
import Card from '../Components/Card';
import Pagination from '@material-ui/lab/Pagination';
import GlobalStateContext from '../Global/GlobalStateContext'
import {Main, ContainerPagination} from '../Style/HomeStyles'
import Loading from "../Components/Loading";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Lorem
} from "@chakra-ui/react"

export function Home() {
    let {states, setters, requests, captured} = useContext(GlobalStateContext)
    const {isOpen, onOpen, onClose} = useDisclosure()

    useEffect(() => {
        requests.getPokemons()
    }, [requests])

    let arrayPokemons = states.pokemons && states.pokemons.filter((pokemon) => {
        const onPokedex = states.pokedex && states.pokedex.some((pokemonPokedex) => {
            return pokemonPokedex.name === pokemon.name
        })
        if (onPokedex) {
            return false
        } else {
            return true
        }
    })

    const handleChange = (e, value) => {
        setters.setPage(value)
        setters.setPageChange(states.page * 30)
    }

    // const teste = () => {
    //   if (captured === true) {
    //     captured = false
    //     onOpen()

    //     return (
    //       <Modal isOpen={isOpen} onClose={onClose}>
    //         <ModalOverlay />
    //         <ModalContent>
    //           <ModalHeader>Modal Title</ModalHeader>
    //           <ModalCloseButton />
    //           <ModalBody>
    //             <Lorem count={2} />
    //           </ModalBody>

    //           <ModalFooter>
    //             <Button colorScheme="blue" mr={3} onClick={onClose}>
    //               Close
    //           </Button>
    //             <Button variant="ghost">Secondary Action</Button>
    //           </ModalFooter>
    //         </ModalContent>
    //       </Modal>
    //     )
    //   }
    // }

    return (
        <div>
            <Main>

                {/* {teste()} */}
                {states.pokemons.length === 0 ? <Loading/> : (
                    arrayPokemons && arrayPokemons.map((poke) => {
                        return (
                            <Card
                                key={poke.name}
                                name={poke.name}
                            />
                        )

                    })
                )
                }

            </Main>
            <ContainerPagination>
                <Pagination
                    count={35}
                    variant="outlined"
                    color="primary"
                    page={states.page}
                    onChange={handleChange}
                />
            </ContainerPagination>
        </div>
    )
}

export default Home