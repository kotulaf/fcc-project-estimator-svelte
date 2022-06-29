<script>
    import { createEventDispatcher } from "svelte";
    import materialStore from "./material-store";

    const dispatch = createEventDispatcher();
    let materials = [];

    materialStore.subscribe(items => {
        materials = items;
    });

    const formatter = new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency: "CZK",
    })

    $: total = materials.reduce((prev, next) => {
        prev += next.price;
        return prev;
    }, 0);

    function edit(id, name, price) {
        dispatch("edit", {id, name, price});
    }

    function remove(id) {
       materialStore.deleteMaterial(id);
    }
    //$: console.log(materials);
</script>


<style>

    table {
        width: 100%;
    }

    tr{
        cursor: pointer;
    }

    tr:last-of-type {
        cursor: default;
    }

    img {
        width: 2%;
        height: auto;
    }

</style>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Material</th>
            <th>Price</th>
            <th />
        </tr>
    </thead>
    <tbody>
        {#each materials as material (material.id)}
        <tr on:click={edit(material.id, material.name, material.price)}>
            <td>{material.name}</td>
            <td>{formatter.format(material.price)}</td>
            <td><img src="http://cdn.onlinewebfonts.com/svg/img_324374.png" alt="trash.png" on:click|stopPropagation={remove(material.id)}></td>
        </tr>
        {/each}
        <tr>
            <td>Total</td>
            <td colspan="2">{formatter.format(total)}</td>
        </tr>
    </tbody>
</table>