Psuedocode

// Create the Tables
CREATE TABLE Users {
    user_id SERIAL PRIMARY KEY,
    name_inp TEXT NOT NULL,

    /* The function (NOW()) will automatically be inserted even if no value 
    is provided for the (created_at) column */
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW() 
}

CREATE TABLE Preference_Types {
    pref_type_id SERIAL PRIMARY KEY,
    pref_type_name TEXT UNIQUE NOT NULL,
    pref_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
}

CREATE TABLE User_Preferences {
	user_pref_id SERIAL PRIMARY KEY,

    // Integer references ensures that the information is being copied accuratley between the tables
    // INTEGER: defines the column data type. REFERENCES: creates the link between tables 
	user_id INTEGER REFERENCES Users(user_id) NOT NULL,
	pref_type_id INTEGER REFERENCES Preference_Types(pref_type_id) NOT NULL,

    value TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
}

CREATE FUNCTION update_timestamp()  // Define a function
// Trigger functions are designed to automatically trigger in response to events such as INSERT, UPDATE, or DELETE
// ## is used to enclose the function's logic, tells POSTgreSQL where the function's logic begins/ends
RETURNS TRIGGER AS $$ 
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_user_timestamp 
BEFORE UPDATE ON Users 
FOR EACH ROW
EXECUTE FUNCTION update_timestamp(); 

CREATE TRIGGER set_preference_types_timestamp
BEFORE UPDATE ON Preference_Types
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER set_user_preferences_timestap
BEFORE UPDATE ON User_Preferences
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
