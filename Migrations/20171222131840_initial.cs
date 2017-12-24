using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ChatProject.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateOfJoin = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()"),
                    FName = table.Column<string>(maxLength: 30, nullable: false),
                    LName = table.Column<string>(maxLength: 30, nullable: false),
                    Password = table.Column<string>(maxLength: 255, nullable: false),
                    Phone = table.Column<string>(nullable: true),
                    Username = table.Column<string>(maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Friendship",
                columns: table => new
                {
                    ReceiverId = table.Column<long>(nullable: false),
                    SenderId = table.Column<long>(nullable: false),
                    UserId = table.Column<long>(nullable: true),
                    status = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Friendship", x => new { x.ReceiverId, x.SenderId });
                    table.ForeignKey(
                        name: "FK_Friendship_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Friendship_UserId",
                table: "Friendship",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Friendship");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
