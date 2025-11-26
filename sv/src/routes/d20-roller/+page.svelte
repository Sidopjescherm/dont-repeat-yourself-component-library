<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    let d20 = $state()
    let d4 = $state()
    let d6 = $state()
    let d8 = $state()
    let d10 = $state()
    let d12 = $state()
    let d100 = $state()
    let allDice = $state()

	async function roll() {
		const response = await fetch('/d20-roller')
		d20 = await response.json();
	}

    async function dFourRoll() {
        const response = await fetch('/d20-roller/d4')
        d4 = await response.json()
    }

    async function dSixRoll() {
        const response = await fetch('/d20-roller/d6')
        d6 = await response.json()
    }

    async function dEightRoll() {
        const response = await fetch('/d20-roller/d8')
        d8 = await response.json()
    }

    async function dTenRoll() {
        const response = await fetch('/d20-roller/d10')
        d10 = await response.json()
    }

    async function dTwelveRoll() {
        const response = await fetch('/d20-roller/d12')
        d12 = await response.json()
    }

    async function dHundredRoll() {
        const response = await fetch('/d20-roller/d100')
        d100 = await response.json()
    }

    async function rollAllDice() {
        await roll()
        await dFourRoll()
        await dSixRoll()
        await dEightRoll()
        await dTenRoll()
        await dTwelveRoll()
        await dHundredRoll()
        allDice = { d20, d4, d6, d8, d10, d12, d100 }
    }

    const dice = [d4 + d6 ]
    
    async function sumDice() { 
        console.log(dice)
    }
</script>

<button onclick={dFourRoll}>Roll a d4</button>
<button onclick={dSixRoll}>Roll a d6</button>
<button onclick={dEightRoll}>Roll a d8</button>
<button onclick={dTenRoll}>Roll a d10</button>
<button onclick={dTwelveRoll}>Roll a d12</button>
<button onclick={roll}>Roll a d20</button>
<button onclick={dHundredRoll}>Roll a d100</button>
<button onclick={rollAllDice}>Roll all dice</button>


{#if d4 !== undefined}
    <p>You rolled a {d4}</p>
{:else}
    <p>Click the d4 button to roll a d4!</p>
{/if}

{#if d6 !== undefined}
    <p>You rolled a {d6}</p>
{:else}
    <p>Click the d6 button to roll a d6!</p>
{/if}

{#if d8 !== undefined}
    <p>You rolled a {d8}</p>
{:else}
    <p>Click the d8 button to roll a d8!</p>
{/if}

{#if d10 !== undefined}
    <p>You rolled a {d10}</p>
{:else}
    <p>Click the d10 button to roll a d10!</p>
{/if}

{#if d12 !== undefined}
    <p>You rolled a {d12}</p>
{:else}
    <p>Click the d12 button to roll a d12!</p>
{/if}

{#if d20 !== undefined}
	<p>You rolled a {d20}</p>
{:else}
    <p>Click the button to roll the dice!</p>
{/if}

{#if d20 === 20}
    <p>Critical hit!</p>
{:else if d20 === 1}
    <p>Critical miss!</p>
{/if}

{#if d100 !== undefined}
    <p>You rolled a {d100}</p>
{:else}
    <p>Click the d100 button to roll a d100!</p>
{/if}

{#if allDice !== undefined}
    <h2>All Dice Rolls:</h2>
    <ul>
        <li>d4: {d4}</li>
        <li>d6: {d6}</li>
        <li>d8: {d8}</li>
        <li>d10: {d10}</li>
        <li>d12: {d12}</li>
        <li>d20: {d20}</li>
        <li>d100: {d100}</li>
    </ul>
{:else}
    <p>Click the "Roll all dice" button to roll all dice!</p>
{/if}
