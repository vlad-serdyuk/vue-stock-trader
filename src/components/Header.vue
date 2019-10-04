<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to='/' class="navbar-brand">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to='/portfolio' tag="li" class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
                <router-link to='/stocks' tag="li" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>
            </ul>
        </div>
    </nav>
</template>