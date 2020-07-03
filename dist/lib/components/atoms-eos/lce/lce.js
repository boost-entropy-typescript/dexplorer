import * as React from "react";
import { DataLoading } from "../data-loading/data-loading";
import { DataError } from "../data-error/data-error";
/**
 * A Load Content Error (LCE) base component. This is an highly reusable component taking a promise
 * and processing it correctly showing the state of the promise. The actual `promise` received is a
 * data type that encompass each state of the promise and its result. It's usually expected that this
 * component will be used with `usePromise` hooks (or one of it's derivate).
 *
 * When the promise is loading, the `LCE` component is going to display `DataLoading` component
 * with the `loadingMessage` if present. When there is an error, it shows the `DataError` component
 * which receives the `promise.error` field.
 *
 * When the promise resolves correctly, it simply render the children component which should have
 * access to the `usePromise` returned data.
 */
export const LCE = ({ promise, loadingMessage, children }) => {
    if (promise.state === "pending") {
        return React.createElement(DataLoading, { text: loadingMessage });
    }
    if (promise.state === "rejected") {
        return React.createElement(DataError, { error: promise.error });
    }
    // We expect the caller to pass a renderable component!
    return children;
};
