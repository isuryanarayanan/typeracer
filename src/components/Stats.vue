<template>
    <v-container class="stats-container">
        <v-simple-table dark>
            <thead>
                <tr>
                    <th class="text-left">
                    GameId</th>
                    <th class="text-left">
                    Text</th>

                    <th class="text-left">
                   wpm</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in games" :key="item.gameId">
                    <td>{{ item.gameId }}</td>
                    <td>{{ item.gameText }}</td>
                    <td>{{ item.wpm }}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "Stats",
    computed: {
        ...mapGetters({ games: "get_games" }),
    },
    methods: {},
};
</script>
<style scoped lang="scss">
.stats-container {
    color: #444;
}
</style>
