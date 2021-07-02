import {List, Task, ListsAction, ActionTypes} from "../types";

export const addList = (list: List): ListsAction => {
    return {
        type: ActionTypes.ADD_LIST,
        payload: list
    }
}

export const getLists = (): ListsAction => {
    return {
        type: ActionTypes.GET_LISTS
    }
}

export const getListById = (id: string): ListsAction => {
    return {
        type: ActionTypes.GET_LIST_BY_ID,
        payload: id
    }
}

export const setListIdToDelete = (id: string): ListsAction => {
    return {
        type: ActionTypes.SET_LIST_ID_TO_DELETE,
        payload: id
    }
}

export const setListToEdit = (id: string): ListsAction => {
    return {
        type: ActionTypes.SET_LIST_TO_EDIT,
        payload: id
    }
}

export const setSelectedList = (id: string): ListsAction => {
    return {
        type: ActionTypes.SET_SELECTED_LIST,
        payload: id
    }
}

export const deleteList = (id: string): ListsAction => {
    return {
        type: ActionTypes.DELETE_LIST,
        payload: id
    }
}

export const updateList = (id: string, name: string): ListsAction => {
    return {
        type: ActionTypes.UPDATE_LIST,
        payload: {
            id,
            name
        }
    }
}

export const addTask = (task: Task, list: List): ListsAction => {
    return {
        type: ActionTypes.ADD_TASK,
        payload: {
            task,
            list
        }
    }
}

export const setTaskToDelete = (task: Task, list: List): ListsAction => {
    return {
        type: ActionTypes.SET_TASK_TO_DELETE,
        payload: {
            task,
            list
        }
    }
}

export const unsetTaskToDelete = (): ListsAction => {
    return {
        type: ActionTypes.UNSET_TASK_TO_DELETE
    }
}

export const deleteTask = (task: Task, list: List): ListsAction => {
    return {
        type: ActionTypes.DELETE_TASK,
        payload: {
            task,
            list
        }
    }
}

export const setTaskToEdit = (task: Task, list: List): ListsAction => {
    return {
        type: ActionTypes.SET_TASK_TO_EDIT,
        payload: {
            task,
            list
        }
    }
}

export const unsetTaskToEdit = (): ListsAction => {
    return {
        type: ActionTypes.UNSET_TASK_TO_EDIT
    }
}

export const updateTask = (taskId: string, taskName: string, taskState: boolean, list: List): ListsAction => {
    return {
        type: ActionTypes.UPDATE_TASK,
        payload: {
            taskId,
            taskName,
            taskState,
            list
        }
    }
}
