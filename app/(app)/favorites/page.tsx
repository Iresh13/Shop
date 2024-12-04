import { Fragment } from 'react'
import FavoriteCard from './components/favorites'

export default function Favorites() {
    return (
        <Fragment>
            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100 dark:text-light-200">
                    Your Favorites
                </h2>

                <FavoriteCard />
            </section>
        </Fragment>
    )
}
