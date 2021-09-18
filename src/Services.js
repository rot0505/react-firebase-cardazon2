import React from 'react';
// import './services.css';

function Services() {
    return (
        <div>

            <main>
                <div class="main">
                    <h1 class="tb-title">.</h1>
                    <h2 class="h2-tb">Services</h2>

                    <table class="lessons-tb">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Vendor</th>
                            <th>Buy</th>
                        </tr>

                        <tr>
                            <td>100 Real IG Followers</td>
                            <td>Login required</td>
                            <td>£15</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>

                        <tr>
                            <td>250 Real IG Followers</td>
                            <td>Login required</td>
                            <td>£25</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>

                        <tr>
                            <td>250 Fake IG Followers</td>
                            <td>No login required</td>
                            <td>£15</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>

                        <tr>
                            <td>500 Fake IG Followers</td>
                            <td>No login required</td>
                            <td>£25</td>
                            <td>Diablo</td>
                            <td><button class="button-p">Purchase</button></td>
                        </tr>
                    </table>
                </div>

            </main>
        </div>


    )
}

export default Services;
