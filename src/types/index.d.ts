export interface ValidationOptions {
    required?: true,
    min?: num,
    max?: num,
    val: string,
    pattern?: RegExp,
    errorMsg?: string
}
