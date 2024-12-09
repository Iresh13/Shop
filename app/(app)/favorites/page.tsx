import { Fragment } from 'react'
import FavoriteCard from './components/favorites'

export default function Favorites() {
    return (
        <Fragment>
            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="-z-10 p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100">
                    Your Favorites
                </h2>

                <FavoriteCard />
            </section>
        </Fragment>
    )
}
