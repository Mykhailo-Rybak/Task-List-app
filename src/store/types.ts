export interface Task {
    name: string;
    id: string;
    completed: boolean;
}

export interface List {
    name: string;
    id: string;
    tasks: Task[];
}

export interface Lists {
    [id: string]: List
}

export interface ListState {
    lists: Lists;
    listIdToDelete: string;
    listToEdit: List | null;
    listById: List | null;
    selectedList: List | null;
    taskToDelete: {
        task: Task;
        list: List;
    } | null;
    taskToEdit: {
        task: Task;
        list: List;
    } | null;
}




export enum ActionTypes {
    GET_LISTS = 'GET_LISTS',
    GET_LIST_BY_ID = 'GET_LIST_BY_ID',
    ADD_LIST = 'ADD_LIST',
    DELETE_LIST = 'DELETE_LIST',
    UPDATE_LIST = 'UPDATE_LIST',
    SET_LIST_ID_TO_DELETE = 'SET_LIST_ID_TO_DELETE',
    SET_LIST_TO_EDIT = 'SET_LIST_TO_EDIT',
    SET_SELECTED_LIST = 'SET_SELECTED_LIST',


    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    SET_TASK_TO_DELETE = 'SET_TASK_TO_DELETE',
    UNSET_TASK_TO_DELETE = 'UNSET_TASK_TO_DELETE',
    UPDATE_TASK = 'UPDATE_TASK',
    SET_TASK_TO_EDIT = 'SET_TASK_TO_EDIT',
    UNSET_TASK_TO_EDIT = 'UNSET_TASK_TO_EDIT',

}


interface AddListAction {
    type: typeof ActionTypes.ADD_LIST;
    payload: List;
}

interface GetListsAction {
    type: typeof ActionTypes.GET_LISTS;
}

interface GetListByIdAction {
    type: typeof ActionTypes.GET_LIST_BY_ID;
    payload: string;
}

interface SetListIdToDeleteAction {
    type: typeof ActionTypes.SET_LIST_ID_TO_DELETE;
    payload: string;
}

interface SetListToEditAction {
    type: typeof ActionTypes.SET_LIST_TO_EDIT;
    payload: string;
}

interface DeleteListAction {
    type: typeof ActionTypes.DELETE_LIST;
    payload: string;
}

interface UpdateListAction {
    type: typeof ActionTypes.UPDATE_LIST;
    payload: {
        id: string;
        name: string;
    }
}

interface SetSelectedListAction {
    type: typeof ActionTypes.SET_SELECTED_LIST;
    payload: string;
}

interface AddTaskAction {
    type: typeof ActionTypes.ADD_TASK;
    payload: {
        task: Task;
        list: List;
    }
}

interface DeleteTaskAction {
    type: typeof ActionTypes.DELETE_TASK;
    payload: {
        task: Task;
        list: List;
    }
}

interface SetTaskToDeleteAction {
    type: typeof ActionTypes.SET_TASK_TO_DELETE;
    payload: {
        task: Task;
        list: List;
    }
}

interface UnsetTaskToDeleteAction {
    type: typeof ActionTypes.UNSET_TASK_TO_DELETE;
}

interface EditTaskAction {
    type: typeof ActionTypes.UPDATE_TASK;
    payload: {
        taskId: string;
        taskName: string;
        taskState: boolean;
        list: List;
    }
}

interface SetTaskToEditAction {
    type: typeof ActionTypes.SET_TASK_TO_EDIT;
    payload: {
        task: Task;
        list: List;
    }
}

interface UnsetTaskToEditAction {
    type: typeof ActionTypes.UNSET_TASK_TO_EDIT;
}



export type ListsAction = AddListAction | GetListsAction 
                          | GetListByIdAction | SetListIdToDeleteAction 
                          | SetListToEditAction | DeleteListAction 
                          | UpdateListAction | SetSelectedListAction 
                          | AddTaskAction | DeleteTaskAction 
                          | SetTaskToDeleteAction | UnsetTaskToDeleteAction 
                          | EditTaskAction | SetTaskToEditAction | UnsetTaskToEditAction;

