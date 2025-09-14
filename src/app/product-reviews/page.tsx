import { Suspense } from "react";
import { Product } from "../components/product";
import { Review } from "../components/reviews";

export default function ProductReviews () {
    return <>
        <h2>Product Reviews</h2>
        <Suspense fallback={<p>product reviews is loading...</p>}>
            <Product />
            <Review />
        </Suspense>
    </>
}