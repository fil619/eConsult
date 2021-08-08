import BaseCheckBox from "@/base/_base-checkbox.vue"
import TodoItem from "@/components/TodoItem.vue"
import { shallowMount , config } from "@vue/test-utils"
config.showDeprecationWarnings = false

describe('TodoItem.vue', () => {
    it('checkbox emits an event , todo calls a method', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { todo: { order: 1, id: 1, task: "HTML I", IsComplete: true, status: true } },
            stubs: { 'base-checkbox': BaseCheckBox },
        })
        const mock = jest.fn()
        wrapper.setMethods({ ToggleTodoItem : mock });
        wrapper.findComponent(BaseCheckBox).vm.$emit("UpdateTodo")
        expect(mock).toBeCalled()
    })

    it('Cross calls delete method', () => {
        const wrapper = shallowMount(TodoItem, {
            stubs: { 'base-checkbox': BaseCheckBox },
            propsData: { todo: { order: 1, id: 1, task: "HTML I", IsComplete: true, status: true } },
        })
        const mock = jest.fn()
        wrapper.setMethods({ DeleteTodo : mock });
        wrapper.find('.show-on-hover').trigger('click')
        expect(mock).toBeCalled()
    })

})
