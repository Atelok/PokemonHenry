
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";





function MyComponent() {
    //  const items = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8", "item 9", "item 10"];

    const allPokemon = useSelector((state) => state.allPokemon)

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;

    const handleClick = (event, index) => {
        event.preventDefault();
        setCurrentPage(index);
    };


    const renderItems = () => {
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;

        return allPokemon.slice(start, end).map((item, index) => {
            return <li key={index}>{item}</li>;
        });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 0; i < Math.ceil(allPokemon.length / itemsPerPage); i++) {
            pageNumbers.push(
                <li key={i} className={i === currentPage ? "active" : null}>
                    <a href="#" onClick={(event) => handleClick(event, index)}>
                        {i + 1}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <ul>{renderItems()}</ul>
            <ul className="pagination">{renderPageNumbers()}</ul>
        </div>
    );
}

export default MyComponent;



/*
const ITEMS_PER_PAGE = 8; // número de elementos por página
const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1); // estado para la página actual

    const dogs = useSelector((state) => state.dogs);
    const totalPages = Math.ceil(dogs.length / ITEMS_PER_PAGE); // calcula la cantidad total de páginas basado en la cantidad de datos y el número de elementos por página
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const show_dogs = dogs.slice( 
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    // función para cambiar la página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // función para avanzar a la siguiente página
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // función para retroceder a la página anterior
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            <div style={{ display: "flex", width: "100%" }}>
                <section style={{ minWidth: "35%", height: "500px" }}>
                    <SearchBar style={{ width: "100%" }} />
                    <div>
                        <button onClick={handlePreviousPage}>Previous</button>
                        {[...Array(totalPages)].map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                    </button>
                ))}
                        <button onClick={handleNextPage}>Next</button>
                    </div>
                </section>

                <section style={{ display: "flex", width: "auto%" }}>
                    <div className={style.conteiner}>
                        {show_dogs.map((dog, index) => {
                            return <Card dog={dog} key={index} />;
                        })}
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
*/