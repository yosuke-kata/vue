/**
 * @abstract
 * @template TIn, TEx
 */
export default class ObjectConverter {
    /**
     * @abstract
     * @param     {TEx} externalObj
     * @returns   {TIn} 
     */
    fromExternal(externalObj) {
        throw new Error("NotImplemented");
    }

    /**
     * @abstract
     * @param    {TIn} domainObj
     * @returns  {TEx}
     */
    toExternal(domainObj) {
        throw new Error("NotImplemented");
    }

    /**
     * @abstract
     * @param     {TEx[]} externalObjects
     * @returns   {TIn[]} 
     */
    mapFromExternal(externalObjects) {
        // 昇順
        return externalObjects
        .map(obj => 
            this.fromExternal(obj)
        )
        .sort((a, b) => { 
            return a.name.toLowerCase() 
                    < b.name.toLowerCase() ? -1 :1 
        });
    }
}