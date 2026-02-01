
function format_name(first, last) {

    if (typeof first !== "string" || typeof last !== "string") {
        throw new Error("Arguments must be strings.");
    }

    let first_normalized = first.trim().toLowerCase();
    first_normalized = first_normalized.charAt(0).toUpperCase() + first_normalized.slice(1);

    let last_normalized = last.trim().toLowerCase();
    last_normalized = last_normalized.charAt(0).toUpperCase() + last_normalized.slice(1);

    return `${last_normalized}, ${first_normalized}`;
}

module.exports = format_name;