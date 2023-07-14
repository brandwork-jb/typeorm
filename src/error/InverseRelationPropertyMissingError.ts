import { RelationMetadata } from "../metadata/RelationMetadata"
import { TypeORMError } from "./TypeORMError"

/**
 * Thrown when the inverse side of a relation is not defined in a many-to-one or one-to-one owner relation.
 */
export class InverseRelationPropertyMissingError extends TypeORMError {
    constructor(
        readonly relation: RelationMetadata
    ) {
        super(
            `Cannot create column name for relation ${relation.entityMetadata.name}#${relation.propertyName} because inverseRelation property is not set.` +
                `Please check ${relation.entityMetadata.name}#${relation.propertyName} definition and make sure inverse side of the relation is set properly.`
        )
    }
}
