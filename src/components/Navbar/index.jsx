import { useState } from 'react'

import AddProdModal from '../AddProdModal'

const index = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <nav>
                <button onClick={() => setIsOpen(true)}>New</button>
            </nav>

            {isOpen && <AddProdModal setIsOpen={setIsOpen} />}

        </div>
    )
}

export default index