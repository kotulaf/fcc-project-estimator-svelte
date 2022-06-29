<script>
    import Table from "./Table.svelte";
    import Form from "./Form.svelte";
    import "bootstrap/dist/css/bootstrap.min.css";
    let id;
    let name = "";
    let price;

    function edit(event) {
        ({id, name, price} = event.detail);
    }
</script>

<style>
    main {
        flex: 1;
        align-content: center;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
    }
</style>

<main>
    <h1>Project Estimator</h1>
    <Form bind:id bind:name bind:price /> <!-- two way binding of the variables -->
    <Table on:edit={edit} />
</main>