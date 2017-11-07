/* eslint-disable flowtype/no-weak-types */
// @flow
import type { Selector } from 'reselect'
import type { ConnectedComponentClass } from 'react-redux'
import * as React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

export default function<
  AllProps: {},
  State,
  Action,
  ActionCreator: () => Action,
  Selectors: { [string | number]: Selector<State, AllProps, *> },
  ActionCreators: { [string]: ActionCreator },
  SelectorProps: $ObjMap<
    Selectors,
    <Output>(Selector<State, AllProps, Output>) => Output
  >,
  ActionProps: $ObjMap<ActionCreators, (() => Action) => (() => void)>,
  ContainerProps: *
>(
  reducer: (state: State, action: Action) => State,
  initialState: State
): {
  Store: React.ComponentType<{| children: React.Element<any> |}>,
  createContainer: (
    selectors: Selectors,
    actionCreators: ActionCreators,
    Component: React.ComponentType<AllProps>
  ) => ConnectedComponentClass<ContainerProps, AllProps>
} {
  return {
    Store: ({ children }) => (
      <Provider store={createStore(reducer, initialState)}>{children}</Provider>
    ),
    createContainer: (selectors, actionCreators, Component) =>
      connect(createStructuredSelector(selectors), actionCreators)(Component)
  }
}
