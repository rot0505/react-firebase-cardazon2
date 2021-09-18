import React from 'react'

function Lessons() {
    return (
        <div>
            <main>
                <div class="main">
                    <h1 class="tb-title">.</h1>
                    <h2 class="h2-tb">Lessons</h2>

                    <table class="lessons-tb">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Vendor</th>
                            <th>Buy</th>
                        </tr>


                        <tr>
                            <td>Cracking Lesson</td>
                            <td>Learn to crack fresh, HQ accounts</td>
                            <td>£150</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>

                        <tr>
                            <td>Clicking Lesson</td>
                            <td>Learn to buy products with fullz</td>
                            <td>£30</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>

                        <tr>
                            <td>Leads Generation Lesson</td>
                            <td>Get leads yourself, tools included</td>
                            <td>£125</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>

                        <tr>
                            <td>Spamming Lesson</td>
                            <td>Get your own fullz!</td>
                            <td>£300</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>
                    </table>
                </div>
            </main>

        </div>


    )
}

export default Lessons
