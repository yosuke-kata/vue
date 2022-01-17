<template>
    <div>
        <label>{{ label }}</label>
        <div>
            <select :value="selected" @change="$emit('change', $event.target.value)" style="color: white">

                <!-- default items -->
                <template v-if="itemArray">
                    <option 
                        v-for="item of itemArray"
                        :key="item[itemKey]"
                        :value="item[itemKey]">
                        {{formatter(item, itemKey, itemLabel)}}
                    </option>
                </template>

                <!-- custom items -->
                <slot></slot>

            </select>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label      : { type: String,          required: true                      },
            selected   : { type: undefined,       required: false, default: undefined },
            items      : { type: [Array, Object], required: false, default: () => []  },
            itemKey    : { type: String,          required: false, default: "key"     },
            itemLabel  : { type: String,          required: false, default: "label"   },
            formatter  : { type: Function,        required: false, default: (item, itemKey, itemLabel) => item[itemLabel]},
        },
        emits: [
            'change',
        ],
        model: {
            prop  : 'selected',
            event : 'change'
        },
        computed: {
            itemArray() { return this.items instanceof Array ? this.items : toArray(this.items, this.itemKey, this.itemLabel) },
        }
    }

    /**
     * @param {{[key: string]: any}} obj
     */
    function toArray(obj, itemKey, itemLabel) {
        return Object.entries(obj).map(([key, label]) => ({[itemKey]: key, [itemLabel]: label}));
    }
</script>
