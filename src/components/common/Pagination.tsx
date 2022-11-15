interface PaginateData {
    activePage: number,
    numberOfPages: number,
    changePage: (page: number) => void
}

const Pagination = ({ activePage, numberOfPages, changePage }:PaginateData) => {
    const createPagesArray = (numbersOfPage:number) => {
        const pa = []
        for (let i = 1; i <= numbersOfPage; i++)
            pa.push(i)
        return pa
    }

    const pagesArray = createPagesArray(numberOfPages)

    return (
        <div className="pagination">
            { pagesArray.map((page) =>
                <div className="pagination-item" key={ page }>
                    <button
                        className={(page === activePage)? 'active-page page-link':'page-link'}
                        onClick={() => changePage(page)}>
                            { page }
                    </button>
                </div>
            )}
        </div>
    )



}

export default Pagination;