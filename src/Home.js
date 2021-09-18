import React from 'react'

function Home() {
    return (
        <div>
            <div class="main">
                <h1 class="tb-title">.</h1>

                <h2 class="h2-tb">News/Updates</h2>

                <table class="news-tb">

                    <tr>
                        <th>Date</th>
                        <th>Info</th>
                    </tr>


                    <tr>
                        <td><span class="span-1">14.03.21</span></td>
                        <td><span class="span-1b">Fullz has been added</span></td>
                    </tr>

                    <tr>
                        <td><span class="span-2">13.03.21</span></td>
                        <td><span class="span-2b">Grinch has been locked, 3'Grinch</span></td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default Home
