# Database Setup Instructions

## Prerequisites

You need to have PostgreSQL installed on your system.

## Installation Instructions

### macOS

```bash
# Using Homebrew
brew install postgresql

# Start PostgreSQL service
brew services start postgresql
```

### Ubuntu/Debian Linux

```bash
# Update package list
sudo apt update

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo service postgresql start
```

### Windows

1. Download the PostgreSQL installer from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run the installer
3. Follow the installation wizard
4. Make sure to remember the password you set for the postgres user
5. Ensure the installation directory is added to your system's PATH

## Verifying Installation

To verify that PostgreSQL is installed correctly:

```bash
psql --version
```

## Troubleshooting

If you encounter permission issues:

1. Check if PostgreSQL service is running
2. Verify your postgres user password
3. Ensure the database exists: `createdb remix-master`
4. Check if postgres user has necessary permissions

For connection errors:

1. Verify PostgreSQL is running
2. Check if localhost (127.0.0.1) is correct
3. Ensure port 5432 (default) is not blocked

## Additional Help

For more detailed PostgreSQL setup instructions, visit:

- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL Downloads](https://www.postgresql.org/download/)
