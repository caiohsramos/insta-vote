import React, { useEffect, useState } from 'react'
import Instagram from 'react-instagram-embed'
import Grid from 'react-bootstrap/Container'
import { getFeed } from '../../requests'

const fetchFeed = async (setFeed) => {
    const { data } = await getFeed()

    setFeed(data)
}

const FeedList = ({ feed }) => (
    feed.map((item, idx) => (
        <div key={idx}>
            <h4>#{idx + 1} with {item.wins} wins and {item.losses} losses.</h4>
            <Instagram url={item.url} />
            <hr />
        </div>
    ))
)

export default () => {
    const [feed, setFeed] = useState([])
    useEffect(() => {
        fetchFeed(setFeed)
    }, [])

    return (
        <Grid>
            {feed.length ? <FeedList feed={feed} /> : <h1>Loading...</h1>}
        </Grid>
    )
}