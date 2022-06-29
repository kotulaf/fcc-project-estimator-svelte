<script>
    import materialStore from "./material-store.js";
    export let id;
    export let name = "";
    export let price;

    $: mode = id ? "Edit" : "Add";
    $: canSubmit = price !== undefined && name !== "";

    // function submit(e) {  // also the correct definition of the function
    //     e.preventDefault();
    // }

    function submit() {
        if(!canSubmit){
            return;
        }

        if(mode === "Add")
        {
            materialStore.add(name, price);
        }

        price = '';
        name = '';
        id = undefined;
    }

    function cancel() {
        price = '';
        name = '';
        id = undefined;
    }
</script>

<form on:submit|preventDefault={submit}>
    <div class="row mb-3">
        <label for="material-name" class="col-sm-2 col-form-label">Material</label>
        <div class="col-sm-10">
            <input bind:value={name} type="text" id="material-name" placeholder="Wood, glue, etc.">
        </div>
    </div>

    <div class="row mb-3">
        <label for="material-price" class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
            <input bind:value={price} min="0" step="any" type="number" id="material-price">
        </div>
    </div>

    <button disabled={!canSubmit} type="submit" class="btn btn-primary">{mode}</button>
    {#if mode === "Edit"}
    <button on:click={cancel} type="button" class="btn btn-danger">Cancel</button>
    {/if}
</form>