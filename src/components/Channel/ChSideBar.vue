<template>
  <div>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 250px;">
        <h3 class="Ch-Side-bar-Text"><b>Channelling Centre</b></h3>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
        <li>
            <a href="#" class="nav-link link-dark Ch-Side-bar">
            <b>Channel Home</b>
            </a>
            <hr/>
        </li>
        <li>
            <a href="#" class="nav-link link-dark Ch-Side-bar">
            <b>Channel Request</b>
            </a>
            <hr/>
        </li>
        <li>
            <a href="#" class="nav-link link-dark Ch-Side-bar">
            <b>Add Channel</b>
            </a>
            <hr/>
        </li>
        <li>
            <a href="#" class="nav-link link-dark Ch-Side-bar">
            <b>View Channel</b>
            </a>
            <hr/>
        </li>
        <li>
            <a href="#" class="nav-link link-dark Ch-Side-bar">
            <b>Available channel</b>
            </a>
            <hr/>
        </li>
        <li>
            <a href="#" class="nav-link link-dark Ch-Side-bar">
            <b>Channel Report</b>
            </a>
            <hr/>
        </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "ChSideBar"
}
</script>

<style>

    .Ch-Side-bar{
    transition: transform 0.4s;
    }

    .Ch-Side-bar:hover {
    transform: scale(1.2);
    color: #6504b5;
    }

    .Ch-Side-bar-Text{
        color: #6504b5;
    }

</style>