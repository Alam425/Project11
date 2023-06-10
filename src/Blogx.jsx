
const Blogx = () => {
    return (
        <div className="p-5">
            <div className="py-3"><hr />
                <h2 className="text-2xl text-slate-400 font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <h4 className="text-xl text-slate-500 font-semibold ps-10">❯❯ The access token is a valid token for requesting permission to access confidential resources. <br /> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. <br /> We can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. </h4>
            </div>
            <div className="py-3"><hr />
                <h2 className="text-2xl text-slate-400 font-bold">Compare SQL and NoSQL databases?</h2>
                <h4 className="text-xl text-slate-500 font-semibold ps-10">❯❯ Simply, sql database are sequential and non-sql databases are non-sequential. Sql database maintain a proper line-up of data, or they maintain regularity of chain of data. Whereas, non-sql databases are independent of the structure maintaining approach. Thus, non-sql database gives more productivity!!</h4>
            </div>
            <div className="py-3"><hr />
                <h2 className="text-2xl text-slate-400 font-bold">What is express js? What is Nest JS?</h2>
                <h4 className="text-xl text-slate-500 font-semibold ps-10">❯❯ Express js is a minimal framework of node.js. It is more flexible for user to understand, manage and use. <br /> Nest. js provides large community-based, nest-supported modules to build any specific feature, from concepts like TypeORM, Mongoose, and GraphQL to logging, validation, caching, WebSockets etc. </h4>
            </div>
            <div className="py-3"><hr />
                <h2 className="text-2xl text-slate-400 font-bold">What is MongoDB aggregate and how does it work?</h2>
                <h4 className="text-xl text-slate-500 font-semibold ps-10">❯❯ Mongodb Aggregation is a way of processing a large number of documents in a collection by passing them through different stages. The stages are known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that passes through the pipeline.</h4>
            </div><hr />
        </div>
    );
};

export default Blogx;